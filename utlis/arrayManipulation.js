const arrayManipulation = (array) => {

    const output = array.reduce((obj, item) => {
        obj[item.kelas]
          ? (obj[item.kelas].mode += "," + item.mode)
          : (obj[item.kelas] = { ...item });
        return obj;
      }, []);
  
      const mergeOutput = Object.values(output);
  
      const newOutput = mergeOutput.map((obj) => {
        obj.mode = obj.mode.split(",");
        return obj;
      });
      return newOutput
}

module.exports = {arrayManipulation}