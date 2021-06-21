
export default ()=>([
  {
    type:'input',
    name:'packageName',
    message:'set pakageName',
    default:'test',
    validate(val) {
      if(!val) return 'Please enter pakageName'
      return true
    }
  },
  {
    type:'input',
    name:'port',
    message:'set port',
    default:'8080',
    validate(val) {
      if(!val) return 'Please enter port'
      return true
    }
  },
  {
    type:'checkbox',
    message:'select middleware',
    name:'middleware',
    choices:[
      {
        name:'koaBody',
      },
      {
        name:'koaRouter',
      },
      {
        name: 'koaStatic'
      }
    ],
  }]
)