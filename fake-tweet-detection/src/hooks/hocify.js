import React from 'react';

function hocify(useHook) {
  function hoc(InputComponent) {
    function WrapperComponent(props) {
      const result = useHook();
      
      return <InputComponent {...result} {...props} />
    }
      
    return WrapperComponent;
  }
    
  return hoc;
}

export default hocify;