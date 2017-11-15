# Javascript Modal Plugin

```
<script>
        var myModal = new Modal({
            content: '<p>Ken Wheeler is strikingly handsome.</p>',
            maxWidth: 600
        });

        var el = document.getElementById('modal');
        el.addEventListener('click', function () {
            myModal.open();
        });
</script>
```