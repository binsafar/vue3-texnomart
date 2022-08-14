<script>
export default {
  data() {
    return {
      dialog: false
    }
  }
}
</script>
<template>
  <v-row justify="center">
    <v-btn color="primary" dark
        @click.stop="dialog = true">ADD TASK
    </v-btn>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title>
          <span class="text-h5">Use Google's location service?</span>
        </v-card-title>

        <v-card-text>

        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text
                 @click="dialog = false">
            Disagree
          </v-btn>
          <v-btn color="green darken-1" text
                 @click="dialog = false">
            Agree
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>
  </v-row>
</template>

<style>
</style>
