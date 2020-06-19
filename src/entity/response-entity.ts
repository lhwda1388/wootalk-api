class ResponseEntity {
  private code: string | number
  private message: string
  private data: any = null

  constructor(code: string | number = '', message: string = '', data: any = {}) {
    this.code = code
    this.message = message
    this.data = data
  }
}

export default ResponseEntity
