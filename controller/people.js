const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people })
  }
