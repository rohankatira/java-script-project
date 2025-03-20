
    class shapes{
        shapes_method(){
            console.log("There are many shapes");
            
        }
    }

    class shape_1 extends shapes{
        shapes_method(){
            console.log("this is circle");
            
        }
    }

    class shape_2 extends shapes{
        shapes_method(){
            console.log("this is square");
            
        }
    }

    class shape_3 extends shapes{
        shapes_method(){
            console.log("this is tringle");
            
        }
    }

    class shape_4 extends shapes{
        shapes_method(){
            console.log("this is rectangle");
            
        }
    }

    let = shapes_contorl=[new shape_1(), new shape_2(),new shape_3(), new shape_4()]
    shapes_contorl.forEach(shapes_access => {
        shapes_access.shapes_method()
    });