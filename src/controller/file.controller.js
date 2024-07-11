const download = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = "./assets/uploads/";
  
    res.download(directoryPath + fileName, fileName, (err) => {
      if (err) {
        res.status(500).send({
          message: "Could not download the file. " + err,
        });
      }
    });
  };

module.exports = {
  download,
};