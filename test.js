const named_entities = {
  'Amazon': 'https://www.amazon.com',
  'Berkshire Hathaway': 'https://www.berkshirehathaway.com',
  'Bill & Melinda Gates Foundation': 'https://www.gatesfoundation.org/',
  'Microsoft': 'https://www.microsoft.com',
  'Microsoft Corporation': 'https://www.microsoft.com',
  // and many more...
}
/*
// Some more output examples:
text = "Amazon is a great retailer."
target_output = "[Amazon](https://www.amazon.com) is a great retailer."
text = "Bill Gates started Microsoft."
target_output = "Bill Gates started [Microsoft](https://www.microsoft.com)."
text = "Bill started Microsoft Corporation."
target_output = "Bill started [Microsoft Corporation](https://www.microsoft.com)."
*/

function markdown_linkify(text, named_entities) {
let l = 0;
let r = 0;
const len = text.length-1;
const max = Object.keys(named_entities).reduce((sum, k) => { return sum + k;}, 0);
  //text = "Bill started [Microsoft](https://www.microsoft.com). Corporation."
  while(true) {
    if (l > r && r < len) break;
    Object.entries(named_entities).forEach(([k,v]) => {
      if (text.substring(l, r) === k) {
        text = text.substring(0, l) + `[${k}](${v})` + text.substring(r);
      }
      r++;
      if (r - l === max) {
        return;
      }
    });
    if (l < len) l++;
    else {
      break;
    }
  }
  return text;
}

console.log(markdown_linkify('Bill started Microsoft Corporation', named_entities))