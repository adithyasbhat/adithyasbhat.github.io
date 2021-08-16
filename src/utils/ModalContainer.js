// // import React, { Component } from "react";
// import "./Modals.css";
// import { ModalHandler } from "./ModalHandler";

// class ModalHeader extends Component{

//     constructor(props){
//         super(props);
//         this.closeModal = this.closeModal.bind(this);
//     }

//     closeModal(e){
//         ModalHandler.closeModal();
//     }

//     render(){
//         return(
//             <div className="modal-hdr clearfix">
//                 <h1>{this.props.title}</h1>
//                 <span onClick={this.closeModal}><i className="fas fa-times"></i></span>
//             </div>
//         );
//     }
// }

// class ModalFooter extends Component{
//     constructor(props){
//         super(props);
//         this.handleAction = this.handleAction.bind(this);
//     }

//     handleAction(e){
//         this.props.performAction();
//     }

//     render(){
//         return(
//             <div className="modal-footer clearfix">
//                 <button className="modal-btn" onClick={this.handleAction}>{this.props.action_text}</button>
//             </div>
//         );
//     }
// }

// class ModalContainer extends Component{
//     render(){
//         return(
//             <div className={"modal"}>
//                 <ModalHeader title={this.props.title} />
//                 {this.props.children}
//                 <ModalFooter
//                     action_text={this.props.action_text}
//                     performAction={this.props.performAction} />
//             </div>
//         );
//     }
// }

// class ModalConfirm extends Component{
//     constructor(props){
//         super(props);
//         this.handlePositiveAction = this.handlePositiveAction.bind(this);
//         this.handleNegativeAction = this.handleNegativeAction.bind(this);
//     }

//     handlePositiveAction(e){
//         this.props.getConfirmation(true);
//     }

//     handleNegativeAction(e){
//         this.props.getConfirmation(false);
//     }

//     render(){
//         return(
//             <div className="modal">
//                 <div className="modal-confirm">
//                     <div className="confirm-body">
//                         {this.props.message}
//                     </div>
//                     <div className="confirm-actions clearfix">
//                         <button className="modal-btn" onClick={this.handleNegativeAction}>No</button>
//                         <button className="modal-btn" onClick={this.handlePositiveAction} autoFocus>Yes</button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// class ModalAlert extends Component{
//     constructor(props){
//         super(props);
//         this.handleAction = this.handleAction.bind(this);
//     }

//     handleAction(e){
//         this.props.handleAction();
//     }

//     render(){
//         return(
//             <div className="modal">
//                 <div className="modal-alert">
//                     <ModalHeader title={this.props.title} />
//                     <div className="modal-body">
//                         <div>
//                             <span className={this.props.msgClass}>{this.props.message}</span>
//                         </div>
//                     </div>
//                     <div className="alert-footer">
//                         <button className="modal-btn" onClick={this.handleAction} autoFocus>OK</button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export {ModalContainer, ModalConfirm, ModalAlert};
