# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations
from django.contrib.auth.admin import User


def create_superuser(apps, schema_editor):
    superuser = User()
    superuser.is_active = True
    superuser.is_superuser = True
    superuser.is_staff = True
    superuser.username = 'admin'
    superuser.email = 'admin@example.com'
    superuser.set_password('admin')
    try:
        superuser.save()
    except:
        pass


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.RunPython(create_superuser)
    ]