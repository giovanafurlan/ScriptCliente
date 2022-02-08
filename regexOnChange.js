/** 
Script que retira acentuações e caracteres especias, quando alterado os valores dos campos da API da aba Clientes Potencias
**/

function onChange (field_name)

var firstname= ZDK.Page.getField('First_Name').getValue();
var correctedname= firstname.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
ZDK.Page.getField('First_Name').setValue(correctedname);

var lastName= ZDK.Page.getField('Last_Name').getValue();
var correctedname1= lastName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
ZDK.Page.getField('Last_Name').setValue(correctedname1);

var rua = ZDK.Page.getField('Street').getValue();
if (rua != null) {
    var correctedname2= rua.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    ZDK.Page.getField('Street').setValue(correctedname2);
}

var bairro = ZDK.Page.getField('Bairro').getValue();
if (bairro != null) {
    var correctedname3= bairro.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    ZDK.Page.getField('Bairro').setValue(correctedname3);
}

var cidade = ZDK.Page.getField('City').getValue();
if (cidade != null) {
    var correctedname4= cidade.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    ZDK.Page.getField('City').setValue(correctedname4);
}

var complemento = ZDK.Page.getField('Complemento').getValue();
if (complemento != null) {
    var correctedname5= complemento.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    ZDK.Page.getField('Complemento').setValue(correctedname5);
}

var empresa = ZDK.Page.getField('Company').getValue();
if (empresa != null) {
    var correctedname6= empresa.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    ZDK.Page.getField('Company').setValue(correctedname6);
}