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

1. dc.compare(null,null);
2. dc.compare("a","a");
3. dc.compare("a","ab");
4. dc.compare("a",undefined);
5. dc.compare(undefined,undefined);
6. dc.compare({},[]);
7. dc.compare({a:1},{});
8. dc.compare({a:1},{a:1});
9. dc.compare(true,true);
10. dc.compare(true,false);

```

