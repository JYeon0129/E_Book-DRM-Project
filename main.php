<?php
  session_start();
?>
<html lang="en">
<head>
    <script src="bower_components/web3/dist/web3.js" charset="utf-8"></script>
    <link href="css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-push-2">
          <h1 class="text-center">Block-Chain Book Shop</h1>
          <hr/>
          <br/>
        </div>
      </div>

      <div id="user">
        <h4><?php
          echo $_SESSION['user_address'];?> 님</h1>
        <a href="logout.php">로그아웃</a>

      </div>

      <div id="booksRow" class="row">
        <!-- PETS LOAD HERE -->
      </div>
    </div>
    <div id="bookTemplate" style="display: none;" >
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="panel panel-default panel-pet">
          <div class="panel-heading">
            <h3 class="panel-title">Scrappy</h3>
          </div>
          <div class="panel-body">
            <img width = "140" height = "280" alt="140x140"
            data-src="holder.js/140x140"
            class="img-rounded img-center"
            style="width:100%;"
            src="https://animalso.com/wp-content/uploads/2017/01/Golden-Retriever_6.jpg"
            data-holder-rendered="true">
            <br/><br/>
            <strong>Publication Year</strong>: <span class="book-year">1989</span><br/>
            <strong>Author</strong>: <span class="book-author">Hemingway</span><br/>
            <strong>Publisher</strong>: <span class="book-pub">Warren, MI</span><br/><br/>
            <button class="btn btn-default btn-buy" type="button" data-id="0">Buy</button>
          </div>
        </div>
      </div>
    </div>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/web3.min.js"></script>

    <script src="js/app.js"></script>

  </body>
</html>
