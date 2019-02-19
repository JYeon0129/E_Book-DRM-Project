<html lang="en">
<head>
    <script src="bower_components/web3/dist/web3.js" charset="utf-8"></script>
    <script src="index.js" charset="utf-8"></script>
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

    <div class="text-center">
      <h3>Login</h3>
      <form method="post" action = "/login.php">
          <input type="text" name="input_address" value="" placeholder="Input your Address" maxlength="100"
          size="50"/>
          <input type="submit" value="Go!" />
      </form>

    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/web3.min.js"></script>

  </body>
</html>
