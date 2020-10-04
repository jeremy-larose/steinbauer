import {Component, OnInit } from "@angular/core";
import { DataService } from "../shared/dataService";
import { Modification } from "../shared/modification";

@Component({
    selector: "modification-list",
    templateUrl: "modificationList.component.html",
    styleUrls: [ "modificationList.component.css" ]
})

export class ModificationList implements OnInit {
    constructor( private data: DataService ){
        this.modifications = data.modifications;
    }

    public modifications: Modification[] = [];

    ngOnInit() {
        this.data.loadModifications().subscribe(() =>
            this.modifications = this.data.modifications);
    }
    
    addModificationToOrder( modification: Modification )
    {
        this.data.addToOrder( modification );
    }
    
    removeModification( modification: Modification )
    {
        this.data.removeFromOrder( modification );
    }
}