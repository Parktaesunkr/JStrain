let namespaceA = (function(){
    let privateVariabl = '비공개 변수';
    return {
        publicApi: function(){
            console.log(privateVariabl + '를 접근할 수 있습니다.');
        }
    }
})();

namespaceA.publicApi();