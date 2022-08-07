// window.onload = function(){ 
//     document.getElementById("StakingSelectAll").onclick = StakingSelectAll;
//     document.getElementById("StakingSelectNone").onclick = StakingSelectNone;
//     document.getElementById("StakingStakeSelected").onclick = StakingStakeSelected;
//     document.getElementById("StakingUnstakeSelected").onclick = StakingUnstakeSelected;


//     function updateSelectionCount(){
//         var selectionCount  = document.querySelectorAll('.stakeitem.selected').length;
//         // console.log(selectionCount);
//         var countLabels = document.querySelectorAll('.selectedCount');
//         for(var i = 0; i < countLabels.length; i++) {
//             countLabels[i].innerHTML = selectionCount;
//         }
//         if(selectionCount <= 0){
//             document.getElementById('StakingStakeSelected').disabled = true;
//             document.getElementById('StakingUnstakeSelected').disabled = true;
//         }else{
//             document.getElementById('StakingStakeSelected').disabled = false;
//             document.getElementById('StakingUnstakeSelected').disabled = false;
//         }
//     }

//     function StakingSelectAll() {
//         var stakeItems  = document.querySelectorAll('.stakeitem');
//         for(let i = 0; i < stakeItems.length; i++){ 
//             stakeItems[i].classList.add('selected');
//         }
//         updateSelectionCount();
//     }

//     function StakingSelectNone() {
//         var selectedItems  = document.querySelectorAll('.stakeitem.selected');
//         for(let i = 0; i < selectedItems.length; i++){ 
//             selectedItems[i].classList.remove('selected');
//         }
//         updateSelectionCount();
//     }

//     function StakingStakeSelected() {
//         var selectedToStake  = document.querySelectorAll('.stakeitem.selected');
//         for(let i = 0; i < selectedToStake.length; i++){ 
//             selectedToStake[i].classList.add('staked');
//             selectedToStake[i].classList.remove('selected');
//         }
//         updateSelectionCount();
//     }

//     function StakingUnstakeSelected() {
//         var selectedToUnstake  = document.querySelectorAll('.stakeitem.selected');
//         for(let i = 0; i < selectedToUnstake.length; i++){ 
//             selectedToUnstake[i].classList.remove('staked');
//             selectedToUnstake[i].classList.remove('selected');
//         }
//         updateSelectionCount();
//     }

//     function toggleItemSelect() {
//         var stakeItems = document.querySelectorAll('.stakeitem');
//         for(var i = 0; i < stakeItems.length; i++) {
//             var stakeItem = stakeItems[i];
//             stakeItem.onclick = function(){
//                 this.classList.toggle("selected");
//                 updateSelectionCount();
//             };
//         }
//     }
//     toggleItemSelect();
// };