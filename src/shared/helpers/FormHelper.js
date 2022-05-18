class FormHelper{
  static formDataToJson({formData}){
    const object = {};

    formData.forEach((value, key) => {
      if(!Reflect.has(object, key)){
        object[key] = value;
        return;
      }
      if(!Array.isArray(object[key])){
        object[key] = [object[key]];
      }
      object[key].push(value);
    });

    return JSON.stringify(object);
  }
}

export default FormHelper;