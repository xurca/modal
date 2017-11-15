# Javascript Modal Plugin

```
<script>
        var myModal = new Modal({
            content: '<p>modal content</p>',
            maxWidth: 600
        });

        var el = document.getElementById('modal');
        el.addEventListener('click', function () {
            myModal.open();
        });
</script>
```