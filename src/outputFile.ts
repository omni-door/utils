import fsExtra from 'fs-extra';
import { logDetail, logErr } from './logger';

export function outputFile ({
  file_path,
  file_content,
  mode = 0o777,
  silent
}: {
  file_path: string;
  file_content: string | void | false;
  mode?: number;
  silent?: boolean;
}) {
  try {
    if (file_path && file_content && typeof file_path === 'string' && typeof file_content === 'string') {
      fsExtra.outputFileSync(file_path, file_content, {
        encoding: 'utf8',
        mode
      });
      !silent && logDetail(`Create file(创建文件)：${file_path}`);
    }
  } catch (err) {
    !silent && logErr(err);
  }
}

export default outputFile;