function combineUsers(...args) {
const combinedObject = args.reduce((arg, user) => {
  return { ...arg, ...user };
}, {});
const merge_date = new Date().toLocaleDateString();
return { ...combinedObject, merge_date };
}
  


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
