<?php
require 'app/router.php';
?>

<!DOCTYPE html>
<html>

<head>
    <script src="./app/vue323.js"></script>
    <script src="./app/vuetify.js"></script>
    <link href="./app/css/sdt.css" rel="stylesheet">
    <link href="./app/css/vuetify342.css" rel="stylesheet">
</head>

<body>
    <div id="app"></div>

    <template id="app-template">

        <v-app id="inspire">
            <!--V APP-->
            <v-app-bar flat>
                <v-container class="mx-auto d-flex align-center justify-center">
                    <v-avatar class="me-4 " color="grey-darken-1" size="32"></v-avatar>

                    {{ otros }}

                    <v-btn v-for="link in links" :key="link" :text="link" variant="text"></v-btn>

                    <sdt-nav></sdt-nav>

                    <v-spacer></v-spacer>

                    <v-responsive max-width="160">
                        <v-text-field density="compact" flat hide-details label="Search" rounded="lg" single-line
                            variant="solo-filled"></v-text-field>
                    </v-responsive>
                </v-container>
            </v-app-bar>

            <!--V MAIN-->
            <v-main class="bg-grey-lighten-3 ">
                <v-container>
                    <v-row>
                        <!--COL IZQUIERDA-->
                        <v-col cols="2">
                            <v-sheet rounded="lg">
                                <v-list rounded="lg">
                                    <v-list-item v-for="n in 5" :key="n" link :title="`List Item ${n}`"></v-list-item>

                                    <v-divider class="my-2"></v-divider>

                                    <v-list-item color="grey-lighten-4" link title="Refresh"></v-list-item>
                                </v-list>
                            </v-sheet>
                        </v-col>

                        <!--COL DERECHA-->
                        <v-col cols="10">
                            <v-sheet min-height="70vh" rounded="lg" class="pa-4">
                               <?php require $paginaActual; ?>
                            </v-sheet>
                        </v-col>
                    </v-row>
                </v-container>
            </v-main>
        </v-app>

    </template>

    <script type="module" src="./app/app.js"></script>
</body>

</html>