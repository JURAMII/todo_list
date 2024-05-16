const Contents = {
  inputs: {
    todo: ""
  },

  datas: [
    {
      id: 1,
      todo: "리액트 복습하기",
      checks : false
    },
    {
      id: 2,
      todo: "인강 듣기",
      checks : false
    },
  ],
};

const Reducer = (state, action) => {
  // console.log(action.id)
  switch (action.type) {
    case "create":
      return {
        inputs: Contents.inputs,
        datas: state.datas.concat(action.dic)
      };
    case "delete":
      return {
        ...state,
        datas: state.datas.filter((data) => data.id !== action.id)
      };
    case "update":
      return {
        ...state,
        datas: state.datas.map((data) =>data.id === action.id? 
           { 
                ...data,
                todo: action.todo,
              }  
            : data) };

    case "mark" :
      return{
        ...state,
        datas: state.datas.map((data)=>{
          if(data.id === action.id){
            return{...data, checks: !data.checks}
          }
          return data
        })
      }
    default:
      return state;
  }
};

export {Contents, Reducer}