function BoardController($scope)
{
  SIZE = 20;
  $scope.board= new Array();//[[true, false, false,true,false],[true,true,true,false,false],[false, true, true,true,true],[true, false, false,true,false],[true,true,true,false,false],[false, true, true,true,true],[true, false, false,true,false],[true,true,true,false,false],[false, true, true,true,true]];
  for(row=0;row<SIZE;row++)
  {
    buff = new Array();
    for(col=0;col<SIZE;col++)
    {
      buff.push(Math.random()*10<4);
      console.log(buff);
    }
    $scope.board.push(buff);
  }
  $scope.step = function (){
    board=$scope.board;
    for(var row =0;row<$scope.board.length;row++)
    {
      for(var col=0;col<$scope.board[row].length;col++)
      {
        board[row][col]=update(row,col,board);
      }
    }
  };
}
function update(row, col, board)
{
  var val = board[row][col];
  var total = 0;
  for(var dx=-1;dx<2;dx++)
  {
    if(col+dx>board[row].length||col+dx<0)continue;
    for(var dy=-1;dy<2;dy++)
    {
      if(row+dy>board.length||row+dy<0)continue;
      total+=board[row+dy][col+dx];
    }
  }
  total-=board[row][col];
  if(total<=1)
  return false;
  if(total<=3)
  return val;
  if(total==4)
  return true;
  return false;
}
