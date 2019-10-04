import React, {Component} from "react";
import synonymChangeWordHandler from "../../helpers/synonymChangeWordHandler";

export default class SynonymsSelect extends Component {
    selectedSynonym = (e) => {
        synonymChangeWordHandler(e.target.value);
    };

    render(){
        return <select id="synonyms-select" className="format-action" onChange={this.selectedSynonym}>
            <option>select synonym</option>
        </select>
    };
};