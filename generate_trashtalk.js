// generate_trashtalk.js
function sample(phrase) {
  const randomIndex = Math.floor(Math.random() * phrase.length)
  return phrase[randomIndex]
}

function generateTrashTalk(targetIndex) {
  const targetPeople = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家',
  }
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢'],
  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // return error
  if (typeof targetIndex === 'undefined') {
    return '請選擇一個對象'
  }

  let collection = []

  collection.push(
    targetPeople[targetIndex],
    sample(task[targetIndex]),
    sample(phrase)
  )

  return '身為一個' + collection.join('，')
}

// export generatePassword function for other files to use
module.exports = generateTrashTalk
