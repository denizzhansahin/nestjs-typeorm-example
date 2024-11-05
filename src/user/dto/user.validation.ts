
import { registerDecorator, ValidationArguments, ValidationOptions } from "class-validator";

export function IsAdult(ValidationOptions?:ValidationOptions){


    return function(object:Object, propertyName:string){
        registerDecorator({
            name:'isAdult', //fonksiyonun çağrılmasını sağlar
            target: object.constructor,//uygulanacak nesneyi belirt, onun constructor bilgisini al
            propertyName:propertyName,//özelliği belirt
            options:ValidationOptions,
            validator:{
                validate(value:any,args:ValidationArguments) {
                    //kontrol kısmı

                    const today = new Date()
                    const birthDay = new Date(value)
                    const age = today.getFullYear() - birthDay.getFullYear()
                    console.log('val:',value)
                    console.log('args:',args)
                    
                    if(age<18){
                        return false
                    } else {
                        return true
                    }
                }
            }
        })
    }

}