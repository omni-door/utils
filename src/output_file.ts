import fsExtra from 'fs-extra';
import { logDetail, logErr } from './logger';

export function output_file ({
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
      !silent && logDetail(`创建文件(create file)：${file_path}`);
    }
  } catch (err) {
    !silent && logErr(err);
  }
}

export default output_file;