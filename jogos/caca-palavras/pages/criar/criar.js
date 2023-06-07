import { getOptions } from "../../functions/options/options.js";
import { addLogoLink } from "../../functions/addLogoLink.js";

getOptions();
addLogoLink();


$(document).ready(function() {
    $('textarea').val('palavraum\npalavradois\npalavratres\npalavraquatro');
})