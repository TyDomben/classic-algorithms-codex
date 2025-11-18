defmodule BubbleSort do
  @moduledoc """
  Bubble Sort Algorithm

  A simple comparison-based sorting algorithm that repeatedly steps through
  the list, compares adjacent elements, and swaps them if they're in the wrong order.

  Time Complexity:
    - Best Case: O(n) - when list is already sorted
    - Average Case: O(n²)
    - Worst Case: O(n²) - when list is reverse sorted

  Space Complexity: O(n) - due to immutability, creates new lists
  """

  @doc """
  Basic bubble sort implementation.

  ## Examples

      iex> BubbleSort.sort([64, 34, 25, 12, 22, 11, 90])
      [11, 12, 22, 25, 34, 64, 90]

      iex> BubbleSort.sort([5, 2, 8, 1, 9])
      [1, 2, 5, 8, 9]

      iex> BubbleSort.sort([1])
      [1]

      iex> BubbleSort.sort([])
      []
  """
  def sort([]), do: []
  def sort([x]), do: [x]

  def sort(list) do
    n = length(list)
    do_sort(list, n - 1)
  end

  # Private recursive sort function
  defp do_sort(list, 0), do: list

  defp do_sort(list, passes_remaining) do
    # Perform one pass through the list
    {swapped, new_list} = bubble_pass(list)

    # If no swaps occurred, list is sorted
    if swapped do
      do_sort(new_list, passes_remaining - 1)
    else
      new_list
    end
  end

  # Perform a single pass, bubbling largest element to the end
  defp bubble_pass(list) do
    bubble_pass(list, [], false)
  end

  # Base case: single element or empty
  defp bubble_pass([x], acc, swapped), do: {swapped, Enum.reverse([x | acc])}
  defp bubble_pass([], acc, swapped), do: {swapped, Enum.reverse(acc)}

  # Compare and potentially swap adjacent elements
  defp bubble_pass([x, y | rest], acc, swapped) when x > y do
    # Swap: put y before x
    bubble_pass([x | rest], [y | acc], true)
  end

  defp bubble_pass([x, y | rest], acc, swapped) do
    # No swap: keep x before y
    bubble_pass([y | rest], [x | acc], swapped)
  end

  @doc """
  Bubble sort in descending order.

  ## Examples

      iex> BubbleSort.sort_descending([5, 2, 8, 1, 9])
      [9, 8, 5, 2, 1]

      iex> BubbleSort.sort_descending([1, 2, 3])
      [3, 2, 1]
  """
  def sort_descending(list) do
    sort_with_comparator(list, fn a, b -> a < b end)
  end

  @doc """
  Bubble sort with custom comparator function.

  The comparator should return true if elements should be swapped.

  ## Examples

      iex> # Sort by absolute value
      iex> BubbleSort.sort_with_comparator([-5, 2, -8, 1, 9], fn a, b -> abs(a) > abs(b) end)
      [1, 2, -5, -8, 9]

      iex> # Sort strings by length
      iex> BubbleSort.sort_with_comparator(["apple", "pie", "banana"], fn a, b -> String.length(a) > String.length(b) end)
      ["pie", "apple", "banana"]
  """
  def sort_with_comparator([], _comparator), do: []
  def sort_with_comparator([x], _comparator), do: [x]

  def sort_with_comparator(list, comparator) do
    n = length(list)
    do_sort_custom(list, n - 1, comparator)
  end

  defp do_sort_custom(list, 0, _comparator), do: list

  defp do_sort_custom(list, passes_remaining, comparator) do
    {swapped, new_list} = bubble_pass_custom(list, comparator)

    if swapped do
      do_sort_custom(new_list, passes_remaining - 1, comparator)
    else
      new_list
    end
  end

  defp bubble_pass_custom(list, comparator) do
    bubble_pass_custom(list, [], false, comparator)
  end

  defp bubble_pass_custom([x], acc, swapped, _comparator) do
    {swapped, Enum.reverse([x | acc])}
  end

  defp bubble_pass_custom([], acc, swapped, _comparator) do
    {swapped, Enum.reverse(acc)}
  end

  defp bubble_pass_custom([x, y | rest], acc, swapped, comparator) do
    if comparator.(x, y) do
      # Swap
      bubble_pass_custom([x | rest], [y | acc], true, comparator)
    else
      # No swap
      bubble_pass_custom([y | rest], [x | acc], swapped, comparator)
    end
  end

  @doc """
  Bubble sort that returns steps for visualization.

  ## Examples

      iex> steps = BubbleSort.sort_with_steps([5, 2, 8])
      iex> length(steps) > 0
      true
      iex> List.last(steps).description
      "Sorting complete!"
  """
  def sort_with_steps([]), do: [%{list: [], description: "Empty list"}]
  def sort_with_steps([x]), do: [%{list: [x], description: "Single element - already sorted"}]

  def sort_with_steps(list) do
    initial_step = %{
      list: list,
      comparing: [],
      swapped: false,
      description: "Initial unsorted list"
    }

    n = length(list)
    steps = [initial_step]

    {final_steps, _} = do_sort_steps(list, n - 1, 1, steps)

    final_step = %{
      list: List.last(final_steps).list,
      comparing: [],
      swapped: false,
      description: "Sorting complete!"
    }

    final_steps ++ [final_step]
  end

  defp do_sort_steps(list, 0, _pass_num, steps), do: {steps, list}

  defp do_sort_steps(list, passes_remaining, pass_num, steps) do
    {new_steps, new_list, swapped} = bubble_pass_steps(list, pass_num, steps)

    if swapped do
      do_sort_steps(new_list, passes_remaining - 1, pass_num + 1, new_steps)
    else
      no_swap_step = %{
        list: new_list,
        comparing: [],
        swapped: false,
        description: "No swaps occurred - list is sorted!"
      }

      {new_steps ++ [no_swap_step], new_list}
    end
  end

  defp bubble_pass_steps(list, pass_num, initial_steps) do
    bubble_pass_steps_helper(list, [], initial_steps, false, pass_num, 0)
  end

  defp bubble_pass_steps_helper([x], acc, steps, swapped, pass_num, _index) do
    final_list = Enum.reverse([x | acc])

    pass_complete_step = %{
      list: final_list,
      comparing: [],
      swapped: false,
      description: "Pass #{pass_num} complete"
    }

    {steps ++ [pass_complete_step], final_list, swapped}
  end

  defp bubble_pass_steps_helper([x, y | rest], acc, steps, any_swapped, pass_num, index) do
    comparing_step = %{
      list: Enum.reverse(acc) ++ [x, y | rest],
      comparing: [index, index + 1],
      swapped: false,
      description: "Pass #{pass_num}: Comparing #{x} and #{y}"
    }

    new_steps = steps ++ [comparing_step]

    if x > y do
      # Swap
      swapped_list = Enum.reverse(acc) ++ [y, x | rest]

      swap_step = %{
        list: swapped_list,
        comparing: [index, index + 1],
        swapped: true,
        description: "Swapped #{x} and #{y}"
      }

      bubble_pass_steps_helper([x | rest], [y | acc], new_steps ++ [swap_step], true, pass_num, index + 1)
    else
      # No swap
      bubble_pass_steps_helper([y | rest], [x | acc], new_steps, any_swapped, pass_num, index + 1)
    end
  end

  @doc """
  Check if a list is sorted.

  ## Examples

      iex> BubbleSort.is_sorted?([1, 2, 3, 4, 5])
      true

      iex> BubbleSort.is_sorted?([5, 2, 8, 1])
      false

      iex> BubbleSort.is_sorted?([])
      true
  """
  def is_sorted?([]), do: true
  def is_sorted?([_]), do: true

  def is_sorted?([x, y | rest]) when x <= y do
    is_sorted?([y | rest])
  end

  def is_sorted?(_), do: false
end

# Example usage
IO.puts("=== Bubble Sort Examples (Elixir) ===\n")

# Example 1: Basic sorting
IO.puts("Example 1: Basic Bubble Sort")
arr1 = [64, 34, 25, 12, 22, 11, 90]
IO.puts("Before: #{inspect(arr1)}")
sorted1 = BubbleSort.sort(arr1)
IO.puts("After: #{inspect(sorted1)}")
IO.puts("")

# Example 2: Descending order
IO.puts("Example 2: Descending Order")
arr2 = [5, 2, 8, 1, 9]
IO.puts("Before: #{inspect(arr2)}")
sorted2 = BubbleSort.sort_descending(arr2)
IO.puts("After: #{inspect(sorted2)}")
IO.puts("")

# Example 3: Custom comparator (by absolute value)
IO.puts("Example 3: Custom Comparator (by absolute value)")
arr3 = [-5, 2, -8, 1, 9]
IO.puts("Before: #{inspect(arr3)}")
sorted3 = BubbleSort.sort_with_comparator(arr3, fn a, b -> abs(a) > abs(b) end)
IO.puts("After: #{inspect(sorted3)}")
IO.puts("")

# Example 4: Sorting strings by length
IO.puts("Example 4: Sort strings by length")
arr4 = ["apple", "pie", "banana", "kiwi"]
IO.puts("Before: #{inspect(arr4)}")
sorted4 = BubbleSort.sort_with_comparator(arr4, fn a, b -> String.length(a) > String.length(b) end)
IO.puts("After: #{inspect(sorted4)}")
IO.puts("")

# Example 5: Check if sorted
IO.puts("Example 5: Check if sorted")
IO.puts("Is [1, 2, 3, 4] sorted? #{BubbleSort.is_sorted?([1, 2, 3, 4])}")
IO.puts("Is [4, 2, 3, 1] sorted? #{BubbleSort.is_sorted?([4, 2, 3, 1])}")
