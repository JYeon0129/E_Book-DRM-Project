<%@ contentType="text/html";%>
<%
  String address = request.getParameter("inputAddress");
  session.setAttribute("signedUser",address);
  redirectUrl = "./main.jsp";
  pageContext.forword(redirectUrl);
  //response.sendRedirect("main.jsp");
%>
