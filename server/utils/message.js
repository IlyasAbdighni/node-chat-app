let generateMessages = (from, text) => {
  return {
    from,
    text,
    createdAt: new Date().getTime()
  };
}
 
