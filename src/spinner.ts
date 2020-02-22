import ora from 'ora';
import chalk from 'chalk';
import getLogPrefix from './log_prefix';
import { SPINNER_STATE } from './global.d';

export class Spinner {
  private spinner: ora.Ora;
  public constructor () {
    this.spinner = ora();
    this.state = this.state.bind(this);
    this.text = this.text.bind(this);
    this.color = this.color.bind(this);
    this.prefix = this.prefix.bind(this);
  }

  public state (state: SPINNER_STATE, text?: string) {
    // initial spinner
    const stateMapEmoji = {
      'start': '💤',
      'info': '🔰',
      'warn': '❗️',
      'fail': '❌',
      'succeed': '✅'
    };

    const stateMapColor = {
      'start': 'white' as 'white',
      'info': 'yellowBright' as 'yellowBright',
      'warn': 'yellow' as 'yellow',
      'fail': 'red' as 'red',
      'succeed': 'green' as 'green'
    }

    text = `${getLogPrefix()} ${text}  ${stateMapEmoji[state]}  \n`;
    const color = chalk[stateMapColor[state]];
    this.spinner[state](color(text));
  }

  public text (text: string) {
    this.spinner.text = text;
  }

  public color (color: ora.Color) {
    this.spinner.color = color;
  }

  public prefix (prefix: ora.Spinner) {
    this.spinner.spinner = prefix;
  }
}

const spinner = new Spinner();
export default spinner;