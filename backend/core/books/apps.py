from django.apps import AppConfig


class BooksConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'books'

    def ready(self):
        from django.conf import settings
        from django.db.models.signals import post_save
        from rest_framework.authtoken.models import Token

        def create_auth_token(sender, instance=None, created=False, **kwargs):
            if created:
                Token.objects.create(user=instance)

        post_save.connect(create_auth_token, sender=settings.AUTH_USER_MODEL)
