    class ola{
        device(){
            console.log("The ola can be controled");
            
        }
    }

    class mobile_1 extends ola{
        device(){
            console.log("mobile device one can excess the ola");
            
        }
    }

    class mobile_2 extends ola{
        device(){
            console.log("Mobile device 2 can excess the ola");
            
        }
    }

    let = device_contorl=[new mobile_1(), new mobile_2()]
    device_contorl.forEach(access_key => {
        access_key.device()
    });