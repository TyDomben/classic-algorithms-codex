/**
 * Classic Algorithms Codex - Visualization Framework
 *
 * A shared framework for creating interactive algorithm visualizations
 * Provides common controls, animation engine, and utilities
 */

class VisualizationFramework {
  constructor(canvasId, options = {}) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');

    // Configuration
    this.config = {
      width: options.width || 800,
      height: options.height || 600,
      fps: options.fps || 60,
      defaultSpeed: options.defaultSpeed || 1,
      backgroundColor: options.backgroundColor || '#1e1e1e',
      ...options
    };

    // Set canvas dimensions
    this.canvas.width = this.config.width;
    this.canvas.height = this.config.height;

    // Animation state
    this.state = {
      playing: false,
      speed: this.config.defaultSpeed,
      currentStep: 0,
      steps: [],
      history: []
    };

    // Color palette
    this.colors = {
      primary: '#61dafb',
      secondary: '#bb86fc',
      success: '#4caf50',
      error: '#f44336',
      warning: '#ff9800',
      info: '#2196f3',
      background: '#1e1e1e',
      surface: '#2d2d2d',
      text: '#ffffff',
      textSecondary: '#b0b0b0',
      highlight: '#ffd700',
      comparing: '#ff6b6b',
      sorted: '#51cf66'
    };

    // Bind methods
    this.render = this.render.bind(this);
    this.animate = this.animate.bind(this);

    // Animation loop
    this.animationId = null;
    this.lastFrameTime = 0;
  }

  /**
   * Initialize the visualization with steps
   */
  initialize(steps) {
    this.state.steps = steps;
    this.state.currentStep = 0;
    this.state.history = [];
    this.render();
  }

  /**
   * Play the visualization
   */
  play() {
    if (!this.state.playing && this.state.currentStep < this.state.steps.length) {
      this.state.playing = true;
      this.animate();
    }
  }

  /**
   * Pause the visualization
   */
  pause() {
    this.state.playing = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  /**
   * Reset to beginning
   */
  reset() {
    this.pause();
    this.state.currentStep = 0;
    this.state.history = [];
    this.render();
  }

  /**
   * Step forward
   */
  stepForward() {
    if (this.state.currentStep < this.state.steps.length - 1) {
      this.state.currentStep++;
      this.render();
    }
  }

  /**
   * Step backward
   */
  stepBackward() {
    if (this.state.currentStep > 0) {
      this.state.currentStep--;
      this.render();
    }
  }

  /**
   * Jump to specific step
   */
  jumpToStep(step) {
    if (step >= 0 && step < this.state.steps.length) {
      this.state.currentStep = step;
      this.render();
    }
  }

  /**
   * Set playback speed
   */
  setSpeed(speed) {
    this.state.speed = Math.max(0.1, Math.min(5, speed));
  }

  /**
   * Animation loop
   */
  animate(timestamp = 0) {
    if (!this.state.playing) return;

    const elapsed = timestamp - this.lastFrameTime;
    const frameDelay = (1000 / this.config.fps) / this.state.speed;

    if (elapsed >= frameDelay) {
      this.lastFrameTime = timestamp;

      if (this.state.currentStep < this.state.steps.length - 1) {
        this.state.currentStep++;
        this.render();
      } else {
        this.pause();
      }
    }

    this.animationId = requestAnimationFrame(this.animate);
  }

  /**
   * Render current step (to be overridden)
   */
  render() {
    this.clear();
    const step = this.state.steps[this.state.currentStep];
    if (step && this.config.renderCallback) {
      this.config.renderCallback(this.ctx, step, this);
    }
  }

  /**
   * Clear canvas
   */
  clear() {
    this.ctx.fillStyle = this.config.backgroundColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  /**
   * Draw utilities
   */

  drawArray(arr, x, y, width, height, options = {}) {
    const barWidth = width / arr.length;
    const maxValue = Math.max(...arr.map(item =>
      typeof item === 'object' ? item.value : item
    ));

    arr.forEach((item, i) => {
      const value = typeof item === 'object' ? item.value : item;
      const state = typeof item === 'object' ? item.state : 'default';

      // Determine color based on state
      let color = this.colors.primary;
      if (state === 'comparing') color = this.colors.comparing;
      else if (state === 'sorted') color = this.colors.sorted;
      else if (state === 'highlight') color = this.colors.highlight;
      else if (state === 'active') color = this.colors.warning;

      // Draw bar
      const barHeight = (value / maxValue) * height;
      const barX = x + i * barWidth;
      const barY = y + height - barHeight;

      this.ctx.fillStyle = color;
      this.ctx.fillRect(barX + 2, barY, barWidth - 4, barHeight);

      // Draw value
      if (options.showValues !== false) {
        this.ctx.fillStyle = this.colors.text;
        this.ctx.font = `${Math.min(barWidth * 0.6, 16)}px monospace`;
        this.ctx.textAlign = 'center';
        this.ctx.fillText(value, barX + barWidth / 2, barY - 5);
      }

      // Draw index
      if (options.showIndices) {
        this.ctx.fillStyle = this.colors.textSecondary;
        this.ctx.font = '12px monospace';
        this.ctx.fillText(i, barX + barWidth / 2, y + height + 15);
      }
    });
  }

  drawTree(node, x, y, horizontalSpacing, verticalSpacing, options = {}) {
    if (!node) return;

    const radius = options.radius || 25;
    const color = node.state === 'active' ? this.colors.warning :
                  node.state === 'visited' ? this.colors.success :
                  node.state === 'highlight' ? this.colors.highlight :
                  this.colors.primary;

    // Draw connections to children
    if (node.left) {
      const leftX = x - horizontalSpacing;
      const leftY = y + verticalSpacing;
      this.drawLine(x, y + radius, leftX, leftY - radius, this.colors.textSecondary);
      this.drawTree(node.left, leftX, leftY, horizontalSpacing / 2, verticalSpacing, options);
    }

    if (node.right) {
      const rightX = x + horizontalSpacing;
      const rightY = y + verticalSpacing;
      this.drawLine(x, y + radius, rightX, rightY - radius, this.colors.textSecondary);
      this.drawTree(node.right, rightX, rightY, horizontalSpacing / 2, verticalSpacing, options);
    }

    // Draw node
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.ctx.fillStyle = color;
    this.ctx.fill();
    this.ctx.strokeStyle = this.colors.text;
    this.ctx.lineWidth = 2;
    this.ctx.stroke();

    // Draw value
    this.ctx.fillStyle = this.colors.text;
    this.ctx.font = 'bold 16px monospace';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText(node.value, x, y);
  }

  drawGraph(nodes, edges, x, y, width, height, options = {}) {
    // Draw edges first
    edges.forEach(edge => {
      const from = nodes[edge.from];
      const to = nodes[edge.to];
      const color = edge.state === 'active' ? this.colors.warning :
                    edge.state === 'visited' ? this.colors.success :
                    this.colors.textSecondary;

      this.drawLine(from.x, from.y, to.x, to.y, color, 2);

      // Draw weight if present
      if (edge.weight !== undefined) {
        const midX = (from.x + to.x) / 2;
        const midY = (from.y + to.y) / 2;
        this.ctx.fillStyle = this.colors.warning;
        this.ctx.font = 'bold 14px monospace';
        this.ctx.fillText(edge.weight, midX, midY);
      }
    });

    // Draw nodes
    nodes.forEach(node => {
      const radius = options.nodeRadius || 20;
      const color = node.state === 'active' ? this.colors.warning :
                    node.state === 'visited' ? this.colors.success :
                    node.state === 'highlight' ? this.colors.highlight :
                    this.colors.primary;

      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      this.ctx.fillStyle = color;
      this.ctx.fill();
      this.ctx.strokeStyle = this.colors.text;
      this.ctx.lineWidth = 2;
      this.ctx.stroke();

      this.ctx.fillStyle = this.colors.text;
      this.ctx.font = 'bold 14px monospace';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(node.label || node.value, node.x, node.y);
    });
  }

  drawLine(x1, y1, x2, y2, color, width = 1) {
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = width;
    this.ctx.stroke();
  }

  drawText(text, x, y, options = {}) {
    this.ctx.fillStyle = options.color || this.colors.text;
    this.ctx.font = options.font || '16px monospace';
    this.ctx.textAlign = options.align || 'left';
    this.ctx.textBaseline = options.baseline || 'top';
    this.ctx.fillText(text, x, y);
  }

  drawInfoPanel(info, x, y, width, height) {
    // Draw background
    this.ctx.fillStyle = this.colors.surface;
    this.ctx.fillRect(x, y, width, height);
    this.ctx.strokeStyle = this.colors.primary;
    this.ctx.strokeRect(x, y, width, height);

    // Draw info
    let currentY = y + 20;
    const lineHeight = 25;

    Object.entries(info).forEach(([key, value]) => {
      this.drawText(`${key}:`, x + 10, currentY, { color: this.colors.textSecondary });
      this.drawText(String(value), x + 10, currentY + lineHeight, {
        color: this.colors.text,
        font: 'bold 16px monospace'
      });
      currentY += lineHeight * 2 + 10;
    });
  }

  /**
   * Export current frame as image
   */
  exportFrame() {
    return this.canvas.toDataURL('image/png');
  }

  /**
   * Get progress percentage
   */
  getProgress() {
    return (this.state.currentStep / (this.state.steps.length - 1)) * 100;
  }
}

/**
 * Control Panel Manager
 * Creates a standard control panel for visualizations
 */
class ControlPanel {
  constructor(containerId, framework) {
    this.container = document.getElementById(containerId);
    this.framework = framework;
    this.build();
  }

  build() {
    this.container.innerHTML = `
      <div class="control-panel">
        <div class="controls-row">
          <button id="btn-reset" class="btn btn-secondary" title="Reset">
            <span>⏮</span> Reset
          </button>
          <button id="btn-step-back" class="btn btn-secondary" title="Step Back">
            <span>⏪</span>
          </button>
          <button id="btn-play-pause" class="btn btn-primary" title="Play/Pause">
            <span id="play-icon">▶</span> <span id="play-text">Play</span>
          </button>
          <button id="btn-step-forward" class="btn btn-secondary" title="Step Forward">
            <span>⏩</span>
          </button>
        </div>

        <div class="controls-row">
          <label for="speed-slider">Speed:</label>
          <input type="range" id="speed-slider" min="0.1" max="5" step="0.1" value="1">
          <span id="speed-value">1.0x</span>
        </div>

        <div class="controls-row">
          <label for="step-slider">Step:</label>
          <input type="range" id="step-slider" min="0" max="100" value="0">
          <span id="step-value">0 / 0</span>
        </div>

        <div class="controls-row">
          <button id="btn-export" class="btn btn-secondary" title="Export Frame">
            <span>💾</span> Export Frame
          </button>
        </div>
      </div>
    `;

    this.attachEventListeners();
  }

  attachEventListeners() {
    // Play/Pause
    const playPauseBtn = document.getElementById('btn-play-pause');
    const playIcon = document.getElementById('play-icon');
    const playText = document.getElementById('play-text');

    playPauseBtn.addEventListener('click', () => {
      if (this.framework.state.playing) {
        this.framework.pause();
        playIcon.textContent = '▶';
        playText.textContent = 'Play';
      } else {
        this.framework.play();
        playIcon.textContent = '⏸';
        playText.textContent = 'Pause';
      }
    });

    // Reset
    document.getElementById('btn-reset').addEventListener('click', () => {
      this.framework.reset();
      playIcon.textContent = '▶';
      playText.textContent = 'Play';
      this.updateStepDisplay();
    });

    // Step controls
    document.getElementById('btn-step-back').addEventListener('click', () => {
      this.framework.stepBackward();
      this.updateStepDisplay();
    });

    document.getElementById('btn-step-forward').addEventListener('click', () => {
      this.framework.stepForward();
      this.updateStepDisplay();
    });

    // Speed slider
    const speedSlider = document.getElementById('speed-slider');
    const speedValue = document.getElementById('speed-value');
    speedSlider.addEventListener('input', (e) => {
      const speed = parseFloat(e.target.value);
      this.framework.setSpeed(speed);
      speedValue.textContent = `${speed.toFixed(1)}x`;
    });

    // Step slider
    const stepSlider = document.getElementById('step-slider');
    stepSlider.max = Math.max(0, this.framework.state.steps.length - 1);
    stepSlider.addEventListener('input', (e) => {
      this.framework.jumpToStep(parseInt(e.target.value));
      this.updateStepDisplay();
    });

    // Export
    document.getElementById('btn-export').addEventListener('click', () => {
      const dataUrl = this.framework.exportFrame();
      const link = document.createElement('a');
      link.download = `algorithm-step-${this.framework.state.currentStep}.png`;
      link.href = dataUrl;
      link.click();
    });

    // Initial update
    this.updateStepDisplay();
  }

  updateStepDisplay() {
    const stepSlider = document.getElementById('step-slider');
    const stepValue = document.getElementById('step-value');

    stepSlider.value = this.framework.state.currentStep;
    stepValue.textContent = `${this.framework.state.currentStep} / ${this.framework.state.steps.length - 1}`;
  }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { VisualizationFramework, ControlPanel };
}
