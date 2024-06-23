<template>
    <div>
        <pre>
            {{ JSON.stringify(formValue, null, 2) }}
        </pre>
    </div>
    <h1>Form handling</h1>
    <div class="container">
        <h1>Contact Us</h1>
        <form @submit="submitForm" method="POST">
            <label for="name">Name:</label>
            <input type="number" id="name" name="name" v-model.number="formValue.name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" v-model="formValue.email" required>
            <label for="country">Country:</label>
            <select id="country" name="country" required v-model="formValue.country">
                <option value="">Select your country</option>
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="australia">Australia</option>
                <option value="india">India</option>
            </select>

            <label for="country">Job Locations:</label>
            <select id="jobLocation" name="jobLocation[]" required multiple v-model="formValue.jobLocation">
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="australia">Australia</option>
                <option value="india">India</option>
            </select>
            <div class="checkbox-group">
                <label>
                    <input type="checkbox" id="subscribe" name="subscribe" v-model="formValue.isSubscribed"
                        true-value="yes" false-value="no">
                    Subscribe to newsletter
                </label>
            </div>

            <div class="radio-group">
                <label>Gender:</label>
                <label>
                    <input type="radio" name="gender" value="male" v-model="formValue.gender" required>
                    Male
                </label>
                <label>
                    <input type="radio" name="gender" value="female" v-model="formValue.gender" required>
                    Female
                </label>
                <label>
                    <input type="radio" name="gender" value="other" v-model="formValue.gender" required>
                    Other
                </label>
            </div>

            <div class="checkbox-group">
                <label>Interests:</label>
                <label>
                    <input type="checkbox" name="interests" value="sports" v-model="formValue.interests">
                    Sports
                </label>
                <label>
                    <input type="checkbox" name="interests" value="music" v-model="formValue.interests">
                    Music
                </label>
                <label>
                    <input type="checkbox" name="interests" value="travel" v-model="formValue.interests">
                    Travel
                </label>
                <label>
                    <input type="checkbox" name="interests" value="reading" v-model="formValue.interests">
                    Reading
                </label>
                <label>
                    <input type="checkbox" name="interests" value="technology" v-model="formValue.interests">
                    Technology
                </label>
            </div>
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" cols="50" v-model="formValue.message" required></textarea>

            <!-- <input type="submit" value="Submit"> -->
            <button type="submit" v-bind:style="button">Submit</button>
        </form>
    </div>
</template>
<script>
export default {
    name: "App",
    components: {

    },
    data() {
        return {
            formValue: {
                name: '',
                email: '',
                message: '',
                country: '',
                jobLocation: [],
                isSubscribed: "no",
                interests: [],
                gender: ''
            },
            button: {
                width: '100%',
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '14px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px'
            }
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();
            console.log(this.formValue);
        }
    }

}
</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.container {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
}

h1 {
    text-align: center;
    color: #333;
}

label {
    display: block;
    margin-bottom: 8px;
    color: #555;
}

input[type="text"],
input[type="email"],
select,
textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

input[type="submit"] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

input[type="submit"]:hover {
    background-color: #45a049;
}

input[type="checkbox"],
input[type="radio"] {
    margin-right: 10px;
}

.checkbox-group,
.radio-group {
    margin-bottom: 20px;
}
</style>