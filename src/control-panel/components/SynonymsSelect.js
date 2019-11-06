import React from "react";
import synonymChangeWordHandler from "../../helpers/synonymChangeWordHandler";

const SynonymsSelect = () => {
    const selectedSynonym = (e) => {
        synonymChangeWordHandler(e.target.value);
    };

    return <select id="synonyms-select" className="format-action" onChange={selectedSynonym}>
        <option>select synonym</option>
    </select>
}

export default SynonymsSelect