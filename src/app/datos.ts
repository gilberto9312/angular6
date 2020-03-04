export interface IDatos {
    bookingId: string,
    firstName: string,
    LastName: string,
    bookingTime: Date,
    streetAddress:string,
    bookingPrice: BigInteger
}


export class IDatosPost {

    constructor(public bookingId, public firstName: string, public LastName: string, public bookingTime : Date, public streetAddress: string, public bookingPrice: BigInteger) {
  
    }
  
  }