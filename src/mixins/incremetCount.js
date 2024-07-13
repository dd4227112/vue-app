export default {
    name: "IncrementHoverMixin",
    data() {
        return {
            count: 0
        }
    },
    methods: {
        IncrementCount() {
            return this.count += 1
        }
    }
}