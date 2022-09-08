

export default class Log {
  private static count = 0;
  private static logStyle = 'color: #18a058; padding: 2px 40px; ';
  private static warnStyle = 'color: #fcb040; padding: 2px 40px; '
  private static errorStyle = 'color: #d03050; padding: 2px 40px; '

  static log(...params: any) {
    let title = `%c log no.${++this.count} time.${Date.now()}`
    console.log(title, this.logStyle);
    
    for(let i=0;i<params.length;i++) {
      console.log(params[i]);
    }
  }

  static warn(...params: any) {
    let title = `%c warn no.${++this.count} time.${Date.now()}`
    console.log(title, this.warnStyle);
    
    for(let i=0;i<params.length;i++) {
      console.log(params[i]);
    }
  }

  static error(...params: any) {
    let title = `%c error no.${++this.count} time.${Date.now()}`
    console.log(title, this.errorStyle);
    
    for(let i=0;i<params.length;i++) {
      console.log(params[i]);
    }

  }

}