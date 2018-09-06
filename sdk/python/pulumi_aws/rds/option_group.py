# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime
from .. import utilities

class OptionGroup(pulumi.CustomResource):
    """
    Provides an RDS DB option group resource. Documentation of the available options for various RDS engines can be found at:
    * [MariaDB Options](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.MariaDB.Options.html)
    * [Microsoft SQL Server Options](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.SQLServer.Options.html)
    * [MySQL Options](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.MySQL.Options.html)
    * [Oracle Options](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.Options.html)
    """
    def __init__(__self__, __name__, __opts__=None, engine_name=None, major_engine_version=None, name=None, name_prefix=None, options=None, option_group_description=None, tags=None):
        """Create a OptionGroup resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not engine_name:
            raise TypeError('Missing required property engine_name')
        elif not isinstance(engine_name, basestring):
            raise TypeError('Expected property engine_name to be a basestring')
        __self__.engine_name = engine_name
        """
        Specifies the name of the engine that this option group should be associated with.
        """
        __props__['engineName'] = engine_name

        if not major_engine_version:
            raise TypeError('Missing required property major_engine_version')
        elif not isinstance(major_engine_version, basestring):
            raise TypeError('Expected property major_engine_version to be a basestring')
        __self__.major_engine_version = major_engine_version
        """
        Specifies the major version of the engine that this option group should be associated with.
        """
        __props__['majorEngineVersion'] = major_engine_version

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        The Name of the setting.
        """
        __props__['name'] = name

        if name_prefix and not isinstance(name_prefix, basestring):
            raise TypeError('Expected property name_prefix to be a basestring')
        __self__.name_prefix = name_prefix
        """
        Creates a unique name beginning with the specified prefix. Conflicts with `name`. Must be lowercase, to match as it is stored in AWS.
        """
        __props__['namePrefix'] = name_prefix

        if options and not isinstance(options, list):
            raise TypeError('Expected property options to be a list')
        __self__.options = options
        """
        A list of Options to apply.
        """
        __props__['options'] = options

        option_group_description = 'Managed by Pulumi'
        if option_group_description and not isinstance(option_group_description, basestring):
            raise TypeError('Expected property option_group_description to be a basestring')
        __self__.option_group_description = option_group_description
        """
        The description of the option group. Defaults to "Managed by Terraform".
        """
        __props__['optionGroupDescription'] = option_group_description

        if tags and not isinstance(tags, dict):
            raise TypeError('Expected property tags to be a dict')
        __self__.tags = tags
        """
        A mapping of tags to assign to the resource.
        """
        __props__['tags'] = tags

        __self__.arn = pulumi.runtime.UNKNOWN
        """
        The ARN of the db option group.
        """

        super(OptionGroup, __self__).__init__(
            'aws:rds/optionGroup:OptionGroup',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'arn' in outs:
            self.arn = outs['arn']
        if 'engineName' in outs:
            self.engine_name = outs['engineName']
        if 'majorEngineVersion' in outs:
            self.major_engine_version = outs['majorEngineVersion']
        if 'name' in outs:
            self.name = outs['name']
        if 'namePrefix' in outs:
            self.name_prefix = outs['namePrefix']
        if 'options' in outs:
            self.options = outs['options']
        if 'optionGroupDescription' in outs:
            self.option_group_description = outs['optionGroupDescription']
        if 'tags' in outs:
            self.tags = outs['tags']
