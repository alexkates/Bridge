Bridge.assembly("TestProject", function ($asm, globals) {
    "use strict";

    Bridge.define("Test.BridgeIssues.N1023.Optional$1", function (T) { return {
        $kind: "struct",
        statics: {
            methods: {
                getDefaultValue: function () { return new (Test.BridgeIssues.N1023.Optional$1(T))(); }
            }
        },
        props: {
            Value: Bridge.getDefaultValue(T)
        },
        ctors: {
            $ctor1: function (value) {
                Test.BridgeIssues.N1023.Optional$1(T).ctor.call(this);
                this.Value = value;
            },
            ctor: function () {
                this.$initialize();
            }
        },
        methods: {
            getHashCode: function () {
                var h = Bridge.addHash([3587563198, this.Value]);
                return h;
            },
            equals: function (o) {
                if (!Bridge.is(o, Test.BridgeIssues.N1023.Optional$1(T))) {
                    return false;
                }
                return Bridge.equals(this.Value, o.Value);
            },
            $clone: function (to) {
                var s = to || new (Test.BridgeIssues.N1023.Optional$1(T))();
                s.Value = this.Value;
                return s;
            }
        }
    }; });

    Bridge.define("Test.BridgeIssues.N1023.PersonDetails", {
        props: {
            Name: null
        },
        ctors: {
            init: function () {
                this.Name = new (Test.BridgeIssues.N1023.Optional$1(System.String))();
            },
            ctor: function (name) {
                this.$initialize();
                this.Name = name.$clone();
            }
        }
    });
});
