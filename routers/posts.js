const express = require ('express');
const router = express.Router();

//index
router.get('/', (req, res) => {
  res.send('Qui restituiremo tutti i posts')
});

//show
router.get('/:id', (req, res) => {
  res.send('Qui restituiremo un solo post con id: ${req.params.id}');
});

//store
router.post('/', (req, res) => {
  res.send('Qui restituiremo tutti i posts');
});

//update
router.put('/:id', (req, res) => {
  res.send('Qui aggiorniamo tutti i posts ${req.params.id}');
});

//patch
router.get('/:id', (req, res) => {
  res.send('Qui restituiremo tutti i posts ${req.params.id}')
});



//delete
router.get('/:id', (req, res) => {
  res.send('Qui eliminiamo un posts ${req.params.id}')
});


module.exports = router;
