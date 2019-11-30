<template>
    <div>
        <v-card
            max-width="500"
            class="mx-auto px-5"
        >
            <v-card-title>External Interface Requirements</v-card-title>
            <v-textarea label="Description"></v-textarea>
            <v-text-field label="Front End Software"></v-text-field>
            <v-text-field label="Back End Software"></v-text-field>
            <v-text-field label="Data Layer"></v-text-field>
            <v-divider></v-divider>
            <v-text-field label="Operating System Database"></v-text-field>
            <v-text-field label="Web Browser"></v-text-field>
            <v-text-field label="HTTP"></v-text-field>
            <v-card-actions>
                <v-btn text @click="openDialog">Click</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>