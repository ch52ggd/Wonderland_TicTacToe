import {Component, Property, Material, MeshComponent} from '@wonderlandengine/api';

/**
 * test
 */
export class Test extends Component {
    static TypeName = 'test';
    /* Properties that are configurable in the editor */
    static Properties = {
        player1Material: Property.material(),
        player2Material: Property.material(),
        //count: Property.int(0)
    };

    meshComponent;

    //count = 0;

    init() {
        console.log('init() with param', this.param);
    }

    start() {
        //console.log('start() with param', this.param);
        this.cursorTarget = this.object.getComponent('cursor-target');
        this.cursorTarget.addClickFunction(this.onClick.bind(this));

        this.meshComponent = this.object.getComponent(MeshComponent);
    }

    update(dt) {
        /* Called every frame. */
    }

    /*
    onClick(){
        console.log("Hello "+ this.object.name);
        this.meshComponent.material = this.player1Material;
    }
    */

    /*
    onClick(){
        this.count += 1;
        console.log(this.count);

        if(this.count%2 == 0){
            this.meshComponent.material = this.player2Material;
        }
        else{
            this.meshComponent.material = this.player1Material;
        }
    }
    */
}
