import fsExtra from 'fs-extra';
import { logErr } from './logger';

export function output_file ({
  file_path,
  file_content,
  mode = 0o777
}: {
  file_path: string;
  file_content: string | void | false;
  mode?: number;
}) {
  try {
    if (file_path && file_content && typeof file_path === 'string' && typeof file_content === 'string') {
      fsExtra.outputFileSync(file_path, file_content, {
        encoding: 'utf8',
        mode
      });
    }
  } catch (err) {
    logErr(err);
  }
}

export default output_file;