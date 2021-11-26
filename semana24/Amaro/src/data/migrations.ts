import { con } from './connection'



con.raw(`
  insert into amaro_products values
  (8363, "VESTIDO CURTO MANGA LONGA LUREX", 'colorido, metal, delicado, estampas, passeio'),
  (8360, "VESTIDO FEMININO CANELADO", 'workwear, viagem, descolado'),
  (8358, "VESTIDO REGATA FEMININO COM GOLA", 'moderno, inverno, liso, basics'),
  (8314, "VESTIDO PLISSADO ACINTURADO", 'casual, viagem, delicado'),
  (8311, "VESTIDO SLIPDRESS CETIM", 'balada, metal, boho, descolado, passeio'),
  (8310, "VESTIDO CURTO PONTO ROMA MANGA", 'casual, metal, delicado, descolado, elastano, estampas'),
  (8309, "VESTIDO MOLETOM COM CAPUZ", 'inverno, liso, casual, descolado'),
  (8301, "VESTIDO LONGO CREPE MANGA COMPRIDA", 'casual, metal, delicado, descolado'),
  (8300, "VESTIDO MALHA COM FENDA", 'balada, metal, estampas, moderno'),
  (8293, "VESTIDO CURTO VELUDO RECORTE GOLA", 'colorido, viagem, delicado, descolado, inverno'),
  (8291, "VESTIDO MANGA COMPRIDA COSTAS", 'inverno, estampas, delicado, descolado, casual, passeio, basics'),
  (8264, "VESTIDO CURTO VELUDO CRISTAL", 'casual, viagem, boho, neutro, festa'),
  (8119, "VESTIDO BABADOS KNIT", 'moderno, metal, descolado, elastano, festa, colorido'),
  (8110, "VESTIDO CUT OUT TRICOT", 'casual, colorido, delicado, descolado, viagem, inverno'),
  (8109, "VESTIDO BABADOS HORIZONTAIS", 'moderno, boho, festa, descolado, colorido'),
  (8104, "VESTIDO BABADO TURTLENECK", 'casual, metal, delicado, neutro, basics, inverno, viagem'),
  (8091, "VESTIDO MIDI VELUDO DECOTADO", 'couro, veludo, passeio, viagem'),
  (8083, "VESTIDO LONGO ESTAMPADO", 'couro, estampado, passeio, viagem'),
  (8080, "VESTIDO CURTO RENDA VISCOSE", 'neutro, workwear, moderno, descolado, liso, elastano'),
  (7613, "VESTIDO LONGO BABADO", 'casual, liso, passeio, colorido, boho'),
  (7533, "VESTIDO COTTON DOUBLE", 'balada, liso, moderno, descolado'),
  (7518, "VESTIDO CAMISETA FANCY", 'casual, liso'),
  (7516, "VESTIDO WRAP FLEUR", 'neutro, liso, basics, viagem')
`)
.then(()=>{
  console.log('Data was insert successfully!')
})
.catch(err=>{
  console.log(err)
})
.finally(()=>{
  con.destroy()
})
