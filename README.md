# deep-compare

Utility to deep compare objects in javascript.

## Importing

```
<script src="deep-compare.js"></script>
```

## Examples

In order to compare objects following list of values are allow
* null `null`
* undefined `undefined`
* array `[]`
* object `{}`
* Number `Number("1")`
* Boolean `true or false`

```

1. dc(null,null);
2. dc("a","a");
3. dc("a","ab");
4. dc("a",undefined);
5. dc(undefined,undefined);
6. dc({},[]);
7. dc({a:1},{});
8. dc({a:1},{a:1});
9. dc(true,true);
10. dc(true,false);

```

