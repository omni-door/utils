import ora from 'ora';
import { SpinnerName } from 'cli-spinners';
import chalk from 'chalk';
import getLogPrefix from './log_prefix';
import { SPINNER_STATE } from './global.d';

const stateMapEmoji = {
  'start': '💤',
  'info': '🔰',
  'warn': '❗️',
  'fail': '❌',
  'succeed': '✅',
  'stop': '❓'
};

const stateMapColor = {
  'start': 'white' as 'white',
  'info': 'yellowBright' as 'yellowBright',
  'warn': 'yellow' as 'yellow',
  'fail': 'red' as 'red',
  'succeed': 'green' as 'green',
  'stop': 'gray' as 'gray'
};

export class Spinner {
  private spinner: ora.Ora;
  private _state: SPINNER_STATE;

  public constructor () {
    this.spinner = ora();
    this._state = 'start';
    this.state = this.state.bind(this);
    this.text = this.text.bind(this);
    this.color = this.color.bind(this);
    this.prefix = this.prefix.bind(this);
    this._decorateText = this._decorateText.bind(this);
  }

  public state (state: SPINNER_STATE, text?: string) {
    this._state = state;
    // initial spinner
    const color = chalk[stateMapColor[state]];
    this.spinner[state](color(this._decorateText(text || '')));
  }

  private _decorateText (text: string) {
    return `${getLogPrefix()} ${text}  ${stateMapEmoji[this._state]}  \n`
  }

  public text (text: string) {
    this.spinner.text = this._decorateText(text);
  }

  public color (color: ora.Color) {
    this.spinner.color = color;
  }

  public prefix (prefix: SpinnerName) {
    this.spinner.spinner = prefix;
  }
}

const spinner = new Spinner();
export default spinner;