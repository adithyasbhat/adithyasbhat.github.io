// // import ReactDOM from "react-dom";
// // import React from "react";

// class ModalHandler {
//   static openComponentInNewDom(component) {
//     ReactDOM.render(component, document.getElementById("secondary"));
//   }

//   //   static openModalByComponent(component) {
//   //     if (!ModalHandler.isOpen) {
//   //       document.getElementById("modals").style.display = "block";
//   //       ReactDOM.render(component, document.getElementById("modals"));
//   //       ModalHandler.isOpen = true;
//   //     }
//   //   }

//   //   static getComponentById(id, object, callbackFunction) {
//   //     if (id === "CREATE_ORG") {
//   //       return <CreateOrg orgListUpdate={callbackFunction} />;
//   //     } else if (id === "CREATE_NODE") {
//   //       return <CreateNode object={object} />;
//   //     } else if (id === "EDIT_NODE") {
//   //       return <EditNode object={object} />;
//   //     } else if (id === "DELETE_NODE") {
//   //       return <DeleteNode object={object} />;
//   //     }
//   //     return null;
//   //   }

//   //   static closeModal() {
//   //     if (ModalHandler.isOpen) {
//   //       ReactDOM.unmountComponentAtNode(document.getElementById("modals"));
//   //       document.getElementById("modals").style.display = "none";
//   //       ModalHandler.isOpen = false;
//   //     }
//   //   }

//   //   static openConfirmation(message, callbackFunction) {
//   //     ModalHandler.closeModal();
//   //     let confirmComponent = (
//   //       <ModalConfirm getConfirmation={callbackFunction} message={message} />
//   //     );
//   //     ModalHandler.openModalByComponent(confirmComponent);
//   //   }

//   //   static showAlert(title, message, msgClass, callbackFunction) {
//   //     ModalHandler.closeModal();
//   //     let alertComponent = (
//   //       <ModalAlert
//   //         handleAction={callbackFunction}
//   //         title={title}
//   //         message={message}
//   //         msgClass={msgClass}
//   //       />
//   //     );
//   //     ModalHandler.openModalByComponent(alertComponent);
//   //   }
// }

// export { ModalHandler };
